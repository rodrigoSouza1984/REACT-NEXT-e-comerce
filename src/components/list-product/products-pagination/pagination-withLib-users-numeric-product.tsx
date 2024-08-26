import React from 'react';
import { Button, Stack } from '@mui/material';

interface NumericPaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}


const NumericPagination: React.FC<NumericPaginationProps> = ({ count, page, rowsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(count / rowsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <Stack direction="row" spacing={1}>
      {pageNumbers.map((number) => (
        <Button 
          key={number}
          variant={number === page ? 'contained' : 'outlined'}
          onClick={(event) => onPageChange(event, number)}
        >
          {number + 1}
        </Button>
      ))}
    </Stack>
  );
};

export default NumericPagination;