package com.premium.template.userandroid.core.database

import com.premium.template.userandroid.core.model.DomainItem
/** Deprecated compatibility wrapper. Use LocalCache with an Android Context in new screens. */
class DemoCache:Cache{private val rows=mutableListOf<DomainItem>();fun all()=rows.toList();fun add(x:DomainItem){rows.add(x)};fun replace(x:List<DomainItem>){rows.clear();rows.addAll(x)};fun remove(id:String){rows.removeAll{it.id==id}}}
