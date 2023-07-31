# activate-sdk

## Install

```bash
npm install activate-sdk
```

## Usage

#### Typescript
```ts
import ActivateSDK from 'activate-sdk';

ActivateSDK.helpers.calculateUnitCost(50, [])

```

#### Javascript
```js
const ActivateSDK = require('activate-sdk');

ActivateSDK.helpers.calculateUnitCost(50, [])
```

### Activate Services


#### Auth

```typescript

const client = new ActivateSDK.httpClient({
  baseURL: 'https://activate-ms-development.up.railway.app/api',
  jwt: ''
});

const login = async (payload: any) => {
  const { data } = await client.auth.login(payload);
  console.log(data);
  return data;
};

login({
  username: 'username',
  password: 'password',
});

```


#### Buys

```typescript

const client = new ActivateSDK.httpClient({
  baseURL: 'https://activate-ms-development.up.railway.app/api',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI0M2M5MDgwYzEyMzM3YTFlNjI2NSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5MDc3MTAxOCwiZXhwIjoxNjkxMzc1ODE4fQ.1H1mLGGGsiJo6LqveUC5i8HrDYp0gjWFA-vxLAP1HG8',
});

const findBuys = async () => {
  const { data } = await client.buy.find();
  console.log(data);
  return data;
};

findBuys();

```