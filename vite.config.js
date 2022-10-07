import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    publicDir:"public",
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                about: resolve(__dirname, "src/about.html"),
                shop: resolve(__dirname, "src/shop.html"),
                signin: resolve(__dirname, "src/signin.html"),
                product: resolve(__dirname, "src/product.html"),
                cart: resolve(__dirname, "src/cart.html"),
                blog: resolve(__dirname, "src/blog.html"),
                contact: resolve(__dirname, "src/contact.html"),
                service: resolve(__dirname, "src/service.html"),
            },
        },
    },
});