import service from '@/request/request'
import qs from 'qs'

 export namespace promotions {
    // 用户登录表单
    export interface promotionpage {
        current: number;
        size: number;
    }
	// 用户登录表单
	    export interface add_log {
			id?:number;
			memberId?:number;
	       memberPhone: string;
		   productId: number;
		   productName:string;
	       sendTime: string;
	       subscribeTime: string;
	
	}
}

export const get_promotionslog = (params: promotions.promotionpage) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-log/page',params);
}
export const delete_promotionslog = (params: promotions.add_log) => {
	
    // 返回的数据格式可以和服务端约定
    return service.get('/mall/sms-flash-promotion-log/del/'+params.id);
}

export const getOne_promotions_product = (params: promotions.add_log) => {
    // 返回的数据格式可以和服务端约定
    return service.get('/mall/sms-flash-promotion-log/one/'+params.id);
}

export const get_promotions_type = (params: promotions.promotionpage) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-session/page',params);
}

export const set_promotions_type = (params: promotions.add_log) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-log/edit',params);
}

export const add_promotions_type = (params: promotions.add_log) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-log/add',params);
}
