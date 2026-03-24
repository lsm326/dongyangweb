/// <reference types="vite/client" />

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.JPG" {
  const content: string;
  export default content;
}
