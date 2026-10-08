package com.premium.template.userandroid.core.database

import com.premium.template.userandroid.core.model.DomainItem
interface Cache{fun all():List<DomainItem>;fun replace(items:List<DomainItem>);fun add(item:DomainItem);fun remove(id:String)}
