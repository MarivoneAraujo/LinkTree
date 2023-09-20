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
      <a
          href="https://revistacrescer.globo.com/maes-e-pais/carreira/noticia/2023/08/superacao-aprendi-programacao-sozinha-com-gemeos-pequenos-e-autistas-diz-mae.ghtml"
          target="_blank"
          rel="noreferrer"
          className="Link"
          data-testid="revista-crescer-link"
        >
      <Button variant="outlined">Matéria na Revista Crescer!</Button>
      </a>
    </Stack>
  );
}