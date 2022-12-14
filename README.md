# TEAM irumdoduk
๐ ์๋น์ค๋ช : ์ด๋ฆ๋๋

๐ ์๋น์ค ํ์ค์๊ฐ : ์น๊ตฌ์ ๊ด๋ จ๋ ํด์ฆ๋ฅผ ํธ๋ฉฐ ๋ฎ์๊ผด๋ก ์ด๋ฆ ๋ฐ๊พธ๊ธฐ(ex. ๊น๋์ฌ - ๊ฑด๊ฐํ ์ฃผ์ฐ์ฌ)

๐ ์๋น์ค ๊ฐ์น์ ์ : ์๋ก๋ฅผ ์์๊ฐ๋ ์ฅ๋ฒฝ์ ๋ฎ์ถ๊ณ , ์ฝ๊ฒ ์ฌ๋ฏธ๋ฅผ ์ถ๊ตฌํ๋ ์ฑ

๐ ์๋น์ค ๋ฌธ์ ์ ์ : ๋งค๋ฒ ๋คํ์ด๋ ๋ชจ์์ ํ  ๋๋ง๋ค ์๊ธฐ์๊ฐ๋ฅผ ํด์ผํ๋ ๋ฒ๊ฑฐ๋ก์

๐ ์๋น์ค ํ๊ฒ์ ์ : ์๋ก๋ฅผ ๋ ์์๊ฐ๊ณ  ์ถ์ 200๋ช์ ์ํธ์ธ

<br/>

### โ๏ธ Used Stacks
 ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
 ![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

<br/>

### ๐ฅ Contributors
|๊น๋์ฌ|์์ฑ์|


<br/>

### ๐ป Roles
|๊ธฐ๋ฅ๋ช|์๋ํฌ์ธํธ|๋ด๋น|๊ตฌํ ์ง์ฒ๋|
| :---: | :---: | :---: | :---: |
|๊ฐ์ธ ์๊ฐ ํ์ด์ง ์กฐํ|[GET] /page/:userId|`์์ฑ์`| |
|ํ ํ๋ฉด ์กฐํ|[GET] /page|`์์ฑ์`| |
|๊ฐ์ธ ํด์ฆ ์กฐํ|[GET] /page/quiz/:userId|`๊น๋์ฌ`| |
|๊ฐ์ธ ๋๋ค์ ๋ณ๊ฒฝ|[PUT] /page/:userId/edit|`๊น๋์ฌ`| |


<br/>

### ERD
![drawSQL-export-2022-11-20_04_28](https://user-images.githubusercontent.com/102947253/202871790-f58e3fa4-23fa-441c-a3b8-657b3dcf9f74.png)




<br/>

### ๐งโ๐ป Code Convention

<details>
<summary>๋ณ์๋ช</summary>   
<div markdown="1">       

 1. Camel Case ์ฌ์ฉ
 2. ํจ์์ ๊ฒฝ์ฐ ๋์ฌ+๋ช์ฌ ์ฌ์ฉ ( ex) getUser() )
 3. ์ฝ์ด๋ ๋๋๋ก ์ฌ์ฉํ์ง ์์
 
</div>
</details>

<details>
<summary>์ฃผ์</summary>   
<div markdown="1">       

 1. ํ ์ค ์ฃผ์ ์ฌ์ฉ //
 2. ํจ์ ์ฃผ์
 ```
 /**
 * @route
 * @desc
 * @access
 **/
 getUser()
 ```
 
</div>
</details>

์ด ์ธ ESLint ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ฌธ๋ฒ์ ๋ฐ๋ฅธ๋ค.

<br/>

### ๐ Branch Convention
|Branch ์ด๋ฆ|์ฉ๋|
| :--: | :--: |
|main|์ด๊ธฐ ์ธํ|
|develop|๋ฐฐํฌ branch (api ๋ก์ง ๊ตฌํ ์๋ฃ)|
|feature/#์ด์๋ฒํธ|์ด์๋ณ api ๋ก์ง ๊ตฌํ|

- feature -> development : Pull Request (์ฝ๋ ๋ฆฌ๋ทฐ ์์ด merge ๋ถ๊ฐ)

<br/>

### โฌ๏ธ Commit Convention
```
[๋ธ๋์น ์ด๋ฆ] ๊ธฐ๋ฅ (๋๋ ๋ณ๊ฒฝ์ฌํญ) ๊ฐ๋ต ์ค๋ช (70์)

- ๋ณด์ถฉ ์ค๋ช์ด ํ์ํ ๊ฒฝ์ฐ
- Head์ ํ์นธ์ ๋์ด์ ์์ฑ

issue tracker: ์ด์ ๋ฒํธ (option)
```

<br/>

### ๐ Folder Constructor
```
3-Layer Architecture ๊ธฐ๋ฐ

๐ src
|_ ๐ config
|_ ๐ controllers
|_ ๐ interfaces
|_ ๐ models
|_ ๐ modules
|_ ๐ routes
|_ ๐ services
|_ ๐ test
|_ index.ts
```
<details>
<summary> <h3> schema.prisma </h3></summary>   
<div markdown="1">   

```
{
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  userId    Int     @id @unique @default(autoincrement())
  name      String  @db.VarChar(10)
  nickName  String  @db.VarChar(10)
  part      String? @db.VarChar(10)
  ybob      String? @db.VarChar(10)
  age       Int?
  mbti      String? @db.VarChar(10)
  major     String? @db.VarChar(10)
  gender    String? @db.VarChar(10)
  photoUrl  String  @db.VarChar(100)
  samdae    Int?
}
```
</div>
</details>

<br/>

<details>
<summary> <h3> ๐ถ package.json (dependencies module)</h3></summary>   
<div markdown="1">   

```
{
  "name": "Server",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/31th-SOPKATHON-7/Server.git",
  "author": "ehdwoKIM <kinbell19@gmail.com>",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist",
    "db:pull": "npx prisma db pull",
    "db:push": "npx prisma db push",
    "generate": "npx prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "bcryptjs": "^2.4.3",
    "express": "^4.18.2",
    "express-validator": "^6.14.2",
    "prisma": "^4.6.1",
    "typescript": "^4.9.3"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.14",
    "@types/express-validator": "^3.0.0",
    "@types/node": "^18.11.9",
    "nodemon": "^2.0.20",
    "ts-node": "^10.9.1"
  }    
}
```
</div>
</details>
 
<br/>

### ๐ Server Architecture
- ๊ฐ๋ฐ ํ๊ฒฝ : Typescript, Express(Node.js)
- ๋ฐ์ดํฐ๋ฒ ์ด์ค : PostgreSQL, AWS S3
- ์๋ฒ ํ๊ฒฝ : AWS EC2, PM2
