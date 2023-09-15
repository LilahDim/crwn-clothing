import "./categories.styles.scss";
import { categories } from "../../../constants";
import CategoryItem from "../category-item/category-item";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Categories;
