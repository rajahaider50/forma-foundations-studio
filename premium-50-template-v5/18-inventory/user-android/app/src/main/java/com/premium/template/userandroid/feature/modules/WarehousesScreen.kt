package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun WarehousesScreen(onCreate:()->Unit){Card{Column{Text("Warehouses");Text("Domain-specific warehouses workflow");Button(onClick=onCreate){Text("Create")}}}}
