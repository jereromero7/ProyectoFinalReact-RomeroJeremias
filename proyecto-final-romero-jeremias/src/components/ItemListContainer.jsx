import Container from '@mui/material/Container'

function ItemListContainer ({ children }) {
  return (
    <Container maxWidth="xl" sx={{padding: "5px"}}>
      {children}
    </Container>
  );
}

export default ItemListContainer