import { CategoriesRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController };
