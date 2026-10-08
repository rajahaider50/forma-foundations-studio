package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ProductsScreen(onCreate:()->Unit){Card{Column{Text("Products");Text("Domain-specific products workflow");Button(onClick=onCreate){Text("Create")}}}}
