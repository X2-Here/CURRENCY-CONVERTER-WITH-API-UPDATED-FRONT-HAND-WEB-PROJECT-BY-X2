### THE LINK OF THE PREVIOUS API HAS CHANGED THIS PORGECT IS BUILD THE ON THE UPDATED LINK 
1. Change the URL from `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/{date}/{endpoint}`<br> to<br> `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}`
2. There is no  `/currencies/{currencyCode}/{currencyCode}` endpoint in this new API, so please only use `/currencies/{currencyCode}` endpoint. For example:

```js
json = fetchJSON(`/currencies/{fromCurrency}/{toCurrency}`)
rate = json[toCurrency]
```
becomes
```js
json = fetchJSON(`/currencies/{fromCurrency}`)
rate = json[fromCurrency][toCurrency]
```
