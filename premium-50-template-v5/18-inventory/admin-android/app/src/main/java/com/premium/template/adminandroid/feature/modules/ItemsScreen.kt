package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ItemsScreen(onCreate:()->Unit){Card{Column{Text("Items");Text("Domain-specific items workflow");Button(onClick=onCreate){Text("Create")}}}}
