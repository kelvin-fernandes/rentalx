import { CategoriesRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryService } from "./ImportCategoryService";

export default (): ImportCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const importCategoryService = new ImportCategoryService(categoriesRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryService
  );

  return importCategoryController;
};
