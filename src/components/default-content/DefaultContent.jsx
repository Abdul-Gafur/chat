import { Container, Grid, Typography } from "@material-ui/core";

const DefaultContent = () => {
  return (
    <Container maxWidth={false}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <Grid item>
          <Typography variant="h3" component="h3" style={{ fontWeight: 300 }}>
            Select a chat
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export { DefaultContent };
