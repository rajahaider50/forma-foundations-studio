package com.premium.template.adminandroid.domain.repository
import com.premium.template.adminandroid.core.model.DomainItem
interface DomainRepository{suspend fun list(module:String):List<DomainItem>;suspend fun create(module:String):DomainItem;suspend fun delete(id:String)}
