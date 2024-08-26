import React from 'react';
import { Select, MenuItem, IconButton, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface AdvancedPaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
  onRowsPerPageChange: (event: SelectChangeEvent<number>) => void;
}

const AdvancedPagination: React.FC<AdvancedPaginationProps> = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const totalPages = Math.ceil(count / rowsPerPage);

  return (
    <div>
      <FormControl variant="outlined" size="small">
        <InputLabel id="rows-per-page-label">Itens por página</InputLabel>
        <Select
          labelId="rows-per-page-label"
          value={rowsPerPage}
          onChange={onRowsPerPageChange}
          label="Itens por página"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>

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

export default AdvancedPagination;