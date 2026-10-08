package com.premium.template.adminandroid.core.database

import android.content.Context
import com.premium.template.adminandroid.core.model.DomainItem
import org.json.JSONArray
import org.json.JSONObject

class LocalCache(context:Context):Cache{private val prefs=context.getSharedPreferences("domain_cache",Context.MODE_PRIVATE);fun all():List<DomainItem>{val a=JSONArray(prefs.getString("items","[]"));return (0 until a.length()).map{val o=a.getJSONObject(it);DomainItem(o.getString("id"),o.getString("module"),o.getString("title"),o.getString("status"))}}fun replace(items:List<DomainItem>){val a=JSONArray();items.forEach{a.put(JSONObject().apply{put("id",it.id);put("module",it.module);put("title",it.title);put("status",it.status)})};prefs.edit().putString("items",a.toString()).apply()}fun add(item:DomainItem)=replace(all()+item);fun remove(id:String)=replace(all().filterNot{it.id==id})}
