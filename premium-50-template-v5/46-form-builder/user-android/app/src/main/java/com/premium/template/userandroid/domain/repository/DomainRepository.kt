package com.premium.template.userandroid.domain.repository
import com.premium.template.userandroid.core.model.DomainItem
interface DomainRepository{suspend fun list(module:String):List<DomainItem>;suspend fun create(module:String):DomainItem;suspend fun delete(id:String)}
