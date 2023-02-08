![image](https://user-images.githubusercontent.com/81274178/217659808-a3013d94-74f9-416a-8964-8df6d90fc731.png)


# Habit Life 💪

## 🧪 Technologies

This project was developed using the following technologies:

- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- [ViteJS](https://vitejs.dev/)
- [ReactJS](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

## 🚀 Getting started

Clone the project and access the folder.

```bash
$ git clone https://github.com/vagnermaltauro/Habits.git
$ cd Habits
```

Follow the steps below:

### Web

```bash
# Install the web dependencies
$ cd web
$ npm install

# Start the web project
$ npm run dev
```

### Server

```bash
# Install the server dependencies
$ cd server
$ npm install

# Start the server project
$ npx prisma migrate dev
$ npx prisma db seed
$ npm run dev

### to access the prisma
$ cd server
$ npx prisma studio
