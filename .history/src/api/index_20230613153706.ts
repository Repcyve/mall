import service from '@/request/request'
import qs from 'qs'

export namespace promotions {
    // 用户登录表单
    export interface promotionpage {
        current: number;
        size: number;
    }
	// 用户登录表单
	    export interface add {
			id?:number;
	       title: string;
	       status:number;
	       endDate: string;
	       startDate: string;
	
	    }


        export interface set_s{
            id:number,
            memberPhone:string,
            productName:string
        }




}

// promotion列表
export const get_promotions = (params: promotions.promotionpage) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion/page',params);
}
// 增
export const add_promotions1 = (params: promotions.add) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion/add',params);
}
// 删
export const delete_promotions1 = (params: promotions.add) => {
    // 返回的数据格式可以和服务端约定
    return service.get('/mall/sms-flash-promotion/del/'+params.id);
}

// 改
export const set_promotions = (params: promotions.add) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion/edit',params);
}

// ---------------------------------------------------------
export const getOne_promotionslog = (params: promotions.add) => {
    // 返回的数据格式可以和服务端约定
    return service.get('/mall/sms-flash-promotion/one/'+params.id);
}

export const get_promotions_product = (params: promotions.promotionpage) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-product-relation/page',params);
}



export const get_promotions_type = (params: promotions.promotionpage) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-session/page',params);
}

// 查
export const set_promotions_type = (params:string) => {
    // 返回的数据格式可以和服务端约定
    return service.get('/mall/sms-flash-promotion-session/one/'+params);
}

// 改
export const sets_promotions_type = (params:object) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-session/edit',params);
}

//
export const add_promotions_type = (params:promotions.set_s) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-session/add',params);
}

export const del_promotions_type = (params:string) => {
    // 返回的数据格式可以和服务端约定
    return service.get('/mall/sms-flash-promotion-session/del/'+params);
}

