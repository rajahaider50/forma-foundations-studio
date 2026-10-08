package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CartScreen(onCreate:()->Unit){Card{Column{Text("Cart");Text("Domain-specific cart workflow");Button(onClick=onCreate){Text("Create")}}}}
