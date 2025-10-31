# Platform

Frontend & Backend Monorepo built using Bun, Turborepo, Next.js and Nest.js

![GitHub contributors](https://img.shields.io/github/contributors/jakofakt-cz/platform)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/jakofakt-cz/platform)
![GitHub Repo stars](https://img.shields.io/github/stars/jakofakt-cz/platform?style=flat)
![GitHub forks](https://img.shields.io/github/forks/jakofakt-cz/platform?style=flat)

---

## 🪛 How to install?

Before you start to use the repo, you need to download dependencies.
You can do that by running command below.

> 💡 *Tip:* You can also run this command if you're missing dependencies and have already used the repo.

```bash
bun install
```

&nbsp;
### 🖱️ Updating dependencies

If you need to update dependencies, you can use command below

```bash
bun update
```

---

## 🖥️ How to test & deploy?

### 🧪 Deploying locally (for testing purposes)

Deploying locally is generally used for testing purposes and is not intended to be used in production in any way. 
We have already setupped areas where are services deployed. currently you can change frontend's in the command script and backend's in `src/main.ts` file by changing the const value.

- Frontend is deployed on port 3000 (increments automatically if port is used)
- Backend is deployed on port 4000

> 💡 *Tip:* This command is alias of `turbo dev`.
> 
```bash
bun dev
```

&nbsp;

### 🌐 Deploying into production

Deploying into production is automatic and shouldn't really be required for doing anything beside that. 
Both repos have individual ways of deploying into production.

#### Frontend

```bash
bun --filter 'frontend' build
```

#### Backend

```bash
bun --filter 'backend' start:prod
```
