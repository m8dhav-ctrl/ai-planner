import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="mt-10 flex items-center justify-center gap-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 rounded-xl border bg-background px-5 py-2 shadow-sm transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
            >
                <ChevronLeft className="h-4 w-4" />
                Previous
            </button>

            <div className="rounded-xl border bg-background px-5 py-2 font-semibold shadow-sm">
                Page {currentPage} of {totalPages}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 rounded-xl border bg-background px-5 py-2 shadow-sm transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
            >
                Next
                <ChevronRight className="h-4 w-4" />
            </button>
        </div>
    );
}