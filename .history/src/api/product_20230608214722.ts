import service from '@/request/request'

namespace promotions {
	// 用户登录表单
	export interface promotionpage {
		current : number;
		size : number;
	}
	// 用户登录表单
	export interface add_product {
		id ?: number;
		productId ?: number;
		flashPromotionSessionId : number;
		flashPromotionPrice : number;
		flashPromotionLimit : number;
		flashPromotionId : number;
		flashPromotionCount : number;
		sort : number;
		productName : string;
		sendTime : string;
		subscribeTime : string;

	}
}

export const get_promotions_product = (params : promotions.promotionpage) => {
	// 返回的数据格式可以和服务端约定
	return service.post('/mall/sms-flash-promotion-product-relation/page', params);
}
export const delete_promotions_product = (params : promotions.add_product) => {

	// 返回的数据格式可以和服务端约定
	return service.get('/mall/sms-flash-promotion-product-relation/del/' + params.id);
}

export const getOne_promotions_product = (params : promotions.add_product) => {
	// 返回的数据格式可以和服务端约定
	return service.get('/mall/sms-flash-promotion-product-relation/one/' + params.id);
}

export const add_promotions_product= (params : promotions.add_product) => {
	// 返回的数据格式可以和服务端约定
	return service.post('/mall/sms-flash-promotion-product-relation/add', params);
}

export const edit_promotions_product= (params : promotions.add_product) => {
	// 返回的数据格式可以和服务端约定
	return service.post('/mall/sms-flash-promotion-product-relation/edit', params);
}