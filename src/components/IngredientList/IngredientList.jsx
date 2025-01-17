const IngredientList = ({ ingredients, addToStack }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToStack(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;