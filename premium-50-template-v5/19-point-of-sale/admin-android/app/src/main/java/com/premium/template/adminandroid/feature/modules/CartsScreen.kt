package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CartsScreen(onCreate:()->Unit){Card{Column{Text("Carts");Text("Domain-specific carts workflow");Button(onClick=onCreate){Text("Create")}}}}
