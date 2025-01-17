const BurgerStack = ({ ingredients, removeFromStack }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li
          key={index}

        >
          {ingredient.name}{' '}
          <button onClick={() => removeFromStack(ingredient.name)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
