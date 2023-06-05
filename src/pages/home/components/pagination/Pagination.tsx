import React from "react";
import "./Pagination.css";
import { Category } from "../../../../models/category";

const pages: number[] = [];
const totalPages = 50;
for (let i = 1; i <= totalPages; i++) {
	pages.push(i);
}

type PaginationProps = {
	getPageNumber: (pageNumber: number) => void;
	pageNumber: number;
	getByCategory: () => Promise<void>;
	category: Category | undefined;
	categoryOtherThanGenres: string |undefined;
	getUpcoming: () => Promise<void>;
	getMovies: () => Promise<void>;
};

export const Pagination = ({
	getPageNumber,
	pageNumber,
	getByCategory,
	category,
	categoryOtherThanGenres,
	getUpcoming,
	getMovies,
}: PaginationProps) => {
	const nextClick = () => {
		if (pageNumber < totalPages) {
			let newPage = pageNumber + 1;

			if (categoryOtherThanGenres === "upComingCategory") {
				getUpcoming();
				getPageNumber(newPage);
			}
			if (categoryOtherThanGenres === "categoryAllMovies") {
				getMovies();
				getPageNumber(newPage);
			}
			if (category) {
				getByCategory();
				getPageNumber(newPage);
			}
		}
	};
	const prevClick = () => {
		if (pageNumber > 1) {
			let newPage = pageNumber - 1;
			if (categoryOtherThanGenres === "upComingCategory") {
				getUpcoming();
				getPageNumber(newPage);
			}
			if (categoryOtherThanGenres === "categoryAllMovies") {
				getMovies();
				getPageNumber(newPage);
			}
			if (category) {
				getByCategory();
				getPageNumber(newPage);
			}
		}
	};

	const clickToLast = () => {
		if (categoryOtherThanGenres === "upComingCategory") {
			getUpcoming();
			getPageNumber(totalPages);
		}
		if (categoryOtherThanGenres === "categoryAllMovies") {
			getMovies();
			getPageNumber(totalPages);
		}
		if (category) {
			getByCategory();
			getPageNumber(totalPages);
		}
	};

	const clickToFirst = () => {
		if (categoryOtherThanGenres === "upComingCategory") {
			getUpcoming();
			getPageNumber(1);
		}
		if (categoryOtherThanGenres === "categoryAllMovies") {
			getMovies();
			getPageNumber(1);
		}
		if (category) {
			getByCategory();
			getPageNumber(1);
		}
	};

	return (
		<div className="pagination_button_container">
			<button
				className="pagination_button"
				type="button"
				onClick={() => clickToFirst()}
			>
				First
			</button>
			<button
				className="pagination_button"
				type="button"
				onClick={() => prevClick()}
			>
				Prev
			</button>
			<p
				className="ellipses"
				style={pageNumber <= 2 ? { display: "none" } : { display: "block" }}
			>
				&#8230;
			</p>
			{pages.map((page) => (
				<button
					className="pagination_button "
					id={pageNumber === page ? "isActive" : "isNotActive"}
					type="button"
					onClick={() => getPageNumber(page)}
					style={page >= pageNumber + 2 || page <= pageNumber - 2 ? { display: "none" } : { display: "block" }}
				>
					{page}
				</button>
			))}
			<p
				className="ellipses"
				style={pageNumber >= totalPages - 2 ? { display: "none" } : { display: "block" }}
			>
				&#8230;
			</p>
			<button
				className="pagination_button"
				type="button"
				onClick={() => nextClick()}
			>
				Next
			</button>
			<button
				className="pagination_button"
				type="button"
				onClick={() => clickToLast()}
			>
				Last
			</button>
		</div>
	);
};
