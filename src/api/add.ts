import service from '@/request/request'


    // 用户登录表单
    export interface add {
		id?:number;
       title: string;
       status:number;
       endDate: string;
       startDate: string;

}

// promotion列表
export const add_promotions1 = (params: add) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion/add',params);
}

export const get_promotionslog = (params: add) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-log/page',params);
}

export const get_promotions_product = (params: add) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-product-relation/page',params);
}

export const get_promotions_type = (params: add) => {
    // 返回的数据格式可以和服务端约定
    return service.post('/mall/sms-flash-promotion-session/page',params);
}

