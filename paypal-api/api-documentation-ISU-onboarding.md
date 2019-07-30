#Postman 方式
>##_1_. ISU onboarding  
>##获取token

* method : post
* requestUrl : <https://api.sandbox.paypal.com/v1/oauth2/token>
* auth type : basic auth

>* user: client_id
>* password: secret

* body: x-www-form-urlencoded

>* grant-type:ckuebt_credentials

* send

>> 返回结果示例 :

```json
		{
			"scope": "https://uri.paypal.com/services/invoicing https://uri.paypal.com/services/disputes/read-buyer https://uri.paypal.com/services/payments/realtimepayment https://uri.paypal.com/services/disputes/update-seller https://uri.paypal.com/services/payments/payment/authcapture openid https://uri.paypal.com/services/disputes/read-seller https://uri.paypal.com/services/payments/refund https://api.paypal.com/v1/vault/credit-card https://api.paypal.com/v1/payments/.* https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.* https://uri.paypal.com/services/subscriptions https://uri.paypal.com/services/applications/webhooks",
			"access_token": "A21AAFlS20uiUQpM2T0Ddscdf02O0tftqAvOf7gxaDVkZbNs40OVNQ2Aiaz4jpNSqIXgqFr1rlxFNgEMHkttqkkvlqzBhbCrA",
			"token_type": "Bearer",
			"app_id": "APP-80W284485P519543T",
			"expires_in": 32400,
			"nonce": "2019-07-29T08:32:24ZORdfwVexPdzS_sg5yLG8arQdwMHe_0_SMAceS49uhpo"
		}
```

>### PayPal - Referrals - Api
> 获取合作伙伴商家登录链接

>> * method: post
>> * url: <https://api.sandbox.paypal.com/v1/customer/partner-referrals> 
>> * header: "Content-Type":"application/json"
>> * auth: access_token
>> * body: 
```json
			{
				"customer_data": {
					"partner_specific_identifiers": [{
						"type": "TRACKING_ID",
						"value": "1506721845"
					}]
				},
				"requested_capabilities": [{
					"capability": "API_INTEGRATION",
					"api_integration_preference": {
						"partner_id": "BSD55M2TSQT72",
						"rest_api_integration": {
							"integration_method": "PAYPAL",
							"integration_type": "THIRD_PARTY"
						},
						"rest_third_party_details": {
							"partner_client_id": "AViNcnTmPaYZ3VltsmWEN3UmogFcZnjKsnqaitDo2cHrEEl1Rlns4GSz36CSUl69q9eADJwEItR0Rq7M",
							"feature_list": [
								"PAYMENT",
								"REFUND",
								"PARTNER_FEE",
								"DELAY_FUNDS_DISBURSEMENT"
							]
						}
					}
				}],
				"web_experience_preference": {
					"partner_logo_url": "https://example.com/paypal.jpg",
					"return_url": "https://example.com/return",
					"action_renewal_url": "https://example.com/renew-prefill-url"
				},
				"collected_consents": [{
					"type": "SHARE_DATA_CONSENT",
					"granted": true
				}],
				"products": [
					"EXPRESS_CHECKOUT"
				]
			}
```
>> * 响应(返回值):
```json
			{
				"links": [
					{
						"href": "https://api.sandbox.paypal.com/v1/customer/partner-referrals/ZmI2MmRlMDYtZjc1NS00MDcxLWFiZjItMTE1YWQ5NmE5MWM2ZTUvM2YvQTVhL0ZremJjYjlkWmJwUVo4UENSb09wMEUzZHdTdHZKN0t3UT12MQ==",
						"rel": "self",
						"method": "GET",
						"description": "Read Referral Data shared by the Caller."
					},
					{
						"href": "https://www.sandbox.paypal.com/partnerexp/appEntry?referralToken=ZmI2MmRlMDYtZjc1NS00MDcxLWFiZjItMTE1YWQ5NmE5MWM2ZTUvM2YvQTVhL0ZremJjYjlkWmJwUVo4UENSb09wMEUzZHdTdHZKN0t3UT12MQ==&context_token=6974158649867448320",
						"rel": "action_url",
						"method": "GET",
						"description": "Target WEB REDIRECT URL for the next action. Customer should be redirected to this URL in the browser."
					}
				]
			}
```




2. 在网站添加PayPal注册链接
3. 卖家在PayPal上注册
4. 将卖家重定向回网站
5. 跟踪卖家onboarding状态

> **********************************************************
> ----------------------------------------------------------
