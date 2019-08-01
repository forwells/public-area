#Paypal api 接口测试 (搭配postman)

## PayPal 3rd party dispute (第三方争议接口)

PayPal 第三方争议api接口调用  

PayPal referrals Api  

###ISU onboarding api 调用步骤
>###Guide
<https://developer.paypal.com/docs/partners/onboarding/upfront/>
>###API
<https://developer.paypal.com/docs/api/partner-referrals/v1/>

>1.调用Partner referral api, 注意partner_id, partner_client_id需要替换成partner平台账号的信息

>2.成功调用会返回一个链接, Merchant在浏览器中打开链接后进入on boarding授权流程,
登录Merchant账号完成授权  

###**3rd Party Dispute API**

>####description:方法和正常dispute完全相同,唯一不同需要加入PayPal-Auth-Assertion指定Merchant

>* 完成授权后,partner 账号作为api caller, 查看merchant的dispute信息,如 list dispute
>* 指定Merchant信息,每次调用需要在request header中加入paypal-auth-assertion,生成方法如下
>> <https://developer.paypal.com/docs/partners/reversals/issue-refund/#1-generate-paypal-auth-assertion-header>

Dispute Guide
<https://developer.paypal.com/docs/integration/direct/customer-disputes/>






[^Yinolink]: paypal-3rd-party-dispute调用
