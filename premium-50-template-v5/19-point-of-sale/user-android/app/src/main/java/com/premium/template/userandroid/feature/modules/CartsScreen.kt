package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CartsScreen(onCreate:()->Unit){Card{Column{Text("Carts");Text("Domain-specific carts workflow");Button(onClick=onCreate){Text("Create")}}}}
