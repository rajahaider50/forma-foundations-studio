package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun StockScreen(onCreate:()->Unit){Card{Column{Text("Stock");Text("Domain-specific stock workflow");Button(onClick=onCreate){Text("Create")}}}}
