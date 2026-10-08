package com.premium.template.userandroid.feature.modules
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.premium.template.userandroid.core.model.DomainItem
import com.premium.template.userandroid.data.repository.DomainRepositoryImpl
import com.premium.template.userandroid.core.database.DemoCache
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
class ModulesViewModel(private val repo:DomainRepositoryImpl=DomainRepositoryImpl(DemoCache())):ViewModel(){private val _items=MutableStateFlow<List<DomainItem>>(emptyList());val items:StateFlow<List<DomainItem>> = _items;fun load(m:String)=viewModelScope.launch{_items.value=repo.list(m)};fun add(m:String)=viewModelScope.launch{repo.create(m);_items.value=repo.list(m)};fun remove(id:String,m:String)=viewModelScope.launch{repo.delete(id);_items.value=repo.list(m)}}
