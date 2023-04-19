import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: "Backend-Assignment", version: "1.0.0" },
        servers: [{
            url: "http://localhost:8080"
        }]
    },
    apis: ["./src/routes/user.routes.ts", "./src/schemas/user.schema.ts", "./src/schemas/history.schema.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app: any, port: number | string) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/docs.json', (req: any, res: any) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    });

    console.log(`Version 1 Docs are available at http://localhost:${port}/api/docs`)
}

export default swaggerDocs;