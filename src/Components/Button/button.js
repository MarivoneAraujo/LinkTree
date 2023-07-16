import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
       <a
          href="https://wa.me/5579999055790?text=Oi, Marivone! Estou pensando em mudar de carreira e preciso de sua ajuda! Podemos marcar um horário para conversar?"
          target="_blank"
          rel="noreferrer"
          className="Link"
          data-testid="whatts-link"
        >
      <Button variant="outlined">Agende sua mentoria!</Button>
      </a>
    </Stack>
  );
}