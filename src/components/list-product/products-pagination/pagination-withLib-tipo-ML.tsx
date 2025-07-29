import React from 'react';
import { IconButton, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface CustomPaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ count, page, rowsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(count / rowsPerPage);

  const handlePreviousPage = () => {
    onPageChange(Math.max(0, page - 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(totalPages - 1, page + 1));
  };

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPages = () => {
    const pages = [];
    const maxMiddlePages = 5;

    // Calculate start and end pages
    let startPage = Math.max(2, page - Math.floor(maxMiddlePages / 2));
    let endPage = Math.min(totalPages - 1, page + Math.floor(maxMiddlePages / 2));

    // Adjust if the end page is too close to the total pages
    if (endPage - startPage < maxMiddlePages - 1) {
      startPage = Math.max(2, endPage - maxMiddlePages + 1);
    }

    // Add the first page button
    pages.push(
      <Button
        key={1}
        variant={page === 0 ? 'contained' : 'outlined'}
        onClick={() => handlePageClick(0)}
      >
        1
      </Button>
    );

    // Add dots if needed
    if (startPage > 2) {
      pages.push(<span key="dots1">...</span>);
    }

    // Add page numbers in the middle
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          variant={i === page + 1 ? 'contained' : 'outlined'}
          onClick={() => handlePageClick(i - 1)}
        >
          {i}
        </Button>
      );
    }

    // Add dots if needed
    if (endPage < totalPages - 1) {
      pages.push(<span key="dots2">...</span>);
    }

    // Add the last page button
    if (totalPages > 1) {
      pages.push(
        <Button
          key={totalPages}
          variant={page === totalPages - 1 ? 'contained' : 'outlined'}
          onClick={() => handlePageClick(totalPages - 1)}
        >
          {totalPages}
        </Button>
      );
    }

    return pages;
  };

  return (
    <div>
      <IconButton onClick={handlePreviousPage} disabled={page === 0}>
        <KeyboardArrowLeft /> Anterior
      </IconButton>
      {renderPages()}
      <IconButton onClick={handleNextPage} disabled={page >= totalPages - 1}>
        Seguinte <KeyboardArrowRight />
      </IconButton>
    </div>
  );
};

export default CustomPagination;