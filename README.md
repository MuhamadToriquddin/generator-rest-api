# FORGE API

Forge API is a command line tools for generate structured REST API with just one line command in the terminal. This tool designed to reduce repetitive task like creating REST API structure, integration with Database, integration with ORM and using basic security automatically.

## Main Feature

- Generate REST API structure automatically
- Integration with database (PostgreSQL, MySQL, and MongoDB)
- Ready to use ORM (Prisma, Sequelize, etc)
- Basic security (rate limiting, and headers security)
- Clean and scalable structure for microsrevice development

## Local Instalation

- Clone this repository:

```bash
git clone https://github.com/username/repository-name.git
cd repository-name
```

- Install dependencies:

```bash
npm install
```

- Build the CLI tools:

```bash
npm run build
```

- Initialize the prefix:

```bash
npm config get prefix
```                     

- Link the CLI tools:

```bash
npm link
```

## How To Use

- Using npx (no need to do local instalation):

1. Run cli tool in the terminal with this command:

```bash
npx forge init-rest-api
```

- Using in local:

1. Run cli tool in the terminal with this command:

```bash
npx forge init-rest-api
```

## Tujuan Project

Project ini dibuat untuk:
- Meningkatkan produktivitas developer backend
- Menyediakan standar awal pengembangan REST API
- Mengurangi human error pada setup awal project

## Roadmap

- [ ] Role-based access control
- [ ] API documentation (Swagger / OpenAPI)
- [ ] Custom template generator
- [ ] Plugin system

## Contribution

This CLI tools is open source for contribution. Feel free to fork this repository, create new branch, and create pull request. 

## License

This project using MIT license. Feel free to use and if you find this repository helpfull, give star.



