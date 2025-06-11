import app from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(res => {
  console.log("DataSource initialized");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => {
  console.log(err);
});

// Server before TypeORM
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });