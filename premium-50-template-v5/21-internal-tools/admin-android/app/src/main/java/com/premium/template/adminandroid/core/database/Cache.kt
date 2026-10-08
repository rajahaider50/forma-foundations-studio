package com.premium.template.adminandroid.core.database

import com.premium.template.adminandroid.core.model.DomainItem
interface Cache{fun all():List<DomainItem>;fun replace(items:List<DomainItem>);fun add(item:DomainItem);fun remove(id:String)}
