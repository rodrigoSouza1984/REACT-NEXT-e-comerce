import React from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface SimplePaginationProps {
  page: number;
  count: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const SimplePagination: React.FC<SimplePaginationProps> = ({ page, count, rowsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(count / rowsPerPage);

  return (
    <div>
      <IconButton
        onClick={(event) => onPageChange(event, Math.max(0, page - 1))}
        disabled={page === 0}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <span>
        Página {page + 1} de {totalPages}
      </span>
      <IconButton
        onClick={(event) => onPageChange(event, Math.min(totalPages - 1, page + 1))}
        disabled={page >= totalPages - 1}
      >
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
};

export default SimplePagination;