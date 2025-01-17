const IngredientList = ({ ingredients, addToStack }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
          <button onClick={() => addToStack(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;