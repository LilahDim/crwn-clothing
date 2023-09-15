import "./directory.styles.scss";
import { categories } from "../../utils/constants";
import CategoryItem from "../category-item/category-item";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
