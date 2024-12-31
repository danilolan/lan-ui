import React from "react";
import Button from "./Button";

export default {
    title: "Components/Button", // Categoria e nome do componente no Storybook
    component: Button,         // Componente principal
  };
  
  export const Default = () => <Button />;
  export const Disabled = () => <Button/>;