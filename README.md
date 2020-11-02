# Ejemplo de chassis/template para MS - Arq. Soft. en la Práctica - ORT Uruguay

### Dependencias y herramientas
- [Express](https://expressjs.com/es/) como servidor web para node
- [Opossum (circuit breaker)](https://github.com/nodeshift/opossum)
- [Sequelize ORM](https://sequelize.org/) y la Postgres lib
- [New Relic](https://github.com/newrelic/node-newrelic) para monitoreo con NewRelic
- [Pino Logger](https://github.com/pinojs/pino) y [Pino HTTP](https://www.npmjs.com/package/pino-http) para logging
- [Open API Doc](https://swagger.io/specification/) & [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) para documentar API
- [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and [Chai-Http](https://www.chaijs.com/plugins/chai-http/) para testing
- [UUID](https://www.npmjs.com/package/uuid) para generar uuids para distributed tracing de requests
- [Prettier](https://prettier.io/docs/en/install.html) para linting y code standards
- [JWT](https://www.npmjs.com/package/jsonwebtoken) para crear JWTs, por ejemplo para auth
- [Axios](https://github.com/axios/axios) como cliente HTTP para mandar request a otros servicios o APIs

### Otras configuraciones
- CircleCI configurado para correr linting y tests
- Dockerfile y docker-compose.yml con base de datos postgres
- Seteado como template en Github, se pude clickear "Use this template" y crear un repo con este template

### Estructura de archivos
```
- src (codigo fuente del servicio)
  - models (modelos, entidades)
  - controllers (controladores de nuestra app)
  - middlewares (middlewares para express)
  - utils (utilidades y demas)
- config (configurationes para el servicio)
- docs (documentacion y config de swagger-ui-express)
- test (tests de integracion y unitarios de nuestra app)
```
