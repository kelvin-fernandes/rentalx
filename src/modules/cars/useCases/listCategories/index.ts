import { CategoriesRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesService } from "./ListCategoriesService";

export default (): ListCategoriesController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoriesService = new ListCategoriesService(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesService
  );

  return listCategoriesController;
};
