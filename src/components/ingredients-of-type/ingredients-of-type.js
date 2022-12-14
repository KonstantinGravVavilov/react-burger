import IngredientItem from "../ingredient-item/ingredient-item";
import PropTypes from 'prop-types';
import styles from './ingredients-of-type.module.css';
import { ingredientType } from "../../utils/types.js";

function IngredientsOfType(props) {
  return (
    <section className={`${styles.ingredients} mb-10`}>
      <h2 className={`text text_type_main-medium ${styles.ingredients__heading} mb-6`}>{props.heading}</h2>
      <ul className={`${styles.ingredients__list} ml-4 mr-4`}>
        {props.items.map((item) => (
          <li className="ingredients__item" key={item._id}>
            <IngredientItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

IngredientsOfType.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ingredientType).isRequired
}

export default IngredientsOfType;
