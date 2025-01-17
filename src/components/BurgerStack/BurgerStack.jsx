const BurgerStack = ({ ingredients, removeFromStack }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li
          key={ingredient.name}
        >
          {ingredient.name}
          <button onClick={() => removeFromStack(ingredient.name)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
